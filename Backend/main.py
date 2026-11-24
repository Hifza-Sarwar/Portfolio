import os
import smtplib

from email.message import EmailMessage
from dotenv import load_dotenv

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


# Load environment variables from .env
load_dotenv()

app = FastAPI(
    title="Portfolio Backend",
    description="Backend API for my portfolio website"
)


# Connect React frontend with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5174"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Pydantic Model
class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str
    message: str


# Home route
@app.get("/")
def home():
    return {"message": "Portfolio Backend is running!"}


# Send Contact Email
@app.post("/contact")
def receive_contact(contact: ContactMessage):

    # Get email settings from .env
    sender_email = os.getenv("SMTP_USER")
    app_password = os.getenv("SMTP_PASSWORD")
    receiver_email = os.getenv("RECEIVER_EMAIL")

    # Check email settings
    if not sender_email or not app_password or not receiver_email:
        raise HTTPException(
            status_code=500,
            detail="Email configuration is missing."
        )

    # Create email
    email = EmailMessage()

    email["From"] = sender_email
    email["To"] = receiver_email
    email["Reply-To"] = contact.email
    email["Subject"] = contact.subject

    email.set_content(
        f"""
        New message from your portfolio website.

        Name: {contact.name}
        Email: {contact.email}

        Subject: {contact.subject}

        Message:
        {contact.message}
        """
    )

    # Send email using Gmail
    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, app_password)
            server.send_message(email)

        return {
            "message": "Your message has been sent successfully!"
        }

    except Exception:
        raise HTTPException(
            status_code=500,
            detail="Email could not be sent. Please try again later."
        )