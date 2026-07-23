import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Server-side validation
    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and company are required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    const submission = {
      name,
      email,
      company,
      message: message || '',
      submittedAt: new Date().toISOString(),
    };

    // Log-only backend behavior as requested
    console.log('--- New Lead Submission ---');
    console.log(JSON.stringify(submission, null, 2));
    console.log('---------------------------');

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request payload.' },
      { status: 400 }
    );
  }
}
