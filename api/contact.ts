import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { buildContactEmail } from './contact-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Email service not configured. Please check environment variables.' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const data = await resend.emails.send({
      from: 'IEEE Contact <onboarding@resend.dev>',
      to: ['studentbranchiee@gmail.com'],
      replyTo: email,
      subject: `📧 New Contact Message — ${name}`,
      html: buildContactEmail({
        name,
        email,
        message,
      }),
    });

    if (data.error) {
      console.error('Resend API error:', data.error);
      return res.status(400).json({ error: data.error.message || 'Failed to send email' });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Unexpected error in contact handler:', error);
    return res.status(500).json({ error: 'Internal server error while sending email' });
  }
}
