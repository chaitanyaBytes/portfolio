import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// You'll want to send emails to your own address
const YOUR_EMAIL_ADDRESS = "your-email@example.com"; // TODO: Replace with your actual email address
// This will be the 'from' address. For best deliverability,
// use an email address from a domain you've verified with Resend.
// For testing, Resend allows 'onboarding@resend.dev'
const FROM_EMAIL_ADDRESS = "onboarding@resend.dev"; // Or your verified domain email

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: "Missing required fields (name, email, or message)." },
                { status: 400 }
            );
        }

        // Validate email format (simple regex, consider a more robust library for production)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: "Invalid email format." },
                { status: 400 }
            );
        }

        console.log("Received contact form submission:");
        console.log("Name:", name);
        console.log("Email (from user):", email);
        console.log("Message:", message);

        // Send the email using Resend
        const { data, error } = await resend.emails.send({
            from: `Contact Form <${FROM_EMAIL_ADDRESS}>`, // Sender name and email
            to: [YOUR_EMAIL_ADDRESS], // Your email address where you'll receive the messages
            subject: `New Contact Form Submission from ${name}`,
            replyTo: email, // Set the user's email as the reply-to address
            html: `
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
            // You can also use the `react` property to send emails with React components
            // react: EmailTemplate({ firstName: name, product: "My Product" }),
        });

        if (error) {
            console.error("Error sending email with Resend:", error);
            return NextResponse.json(
                { message: "Error sending email.", errorDetails: error },
                { status: 500 }
            );
        }

        console.log("Email sent successfully:", data);

        // Send a success response to the frontend
        return NextResponse.json(
            { message: "Message received and email sent successfully!" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error processing contact form:", error);
        if (error instanceof SyntaxError) {
            return NextResponse.json(
                { message: "Invalid request body." },
                { status: 400 }
            );
        }
        // Check if it's a Resend specific error structure if not already handled
        if (error && typeof error === 'object' && 'message' in error) {
            return NextResponse.json(
                { message: "Failed to process request.", errorDetails: (error as Error).message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { message: "Internal Server Error. Could not process your request." },
            { status: 500 }
        );
    }
}