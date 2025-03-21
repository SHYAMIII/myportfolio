import Contact from '../../models/Contact';
import connectDB from '../../lib/connectdb';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    await connectDB();

    const { Name, Email, Message } = await req.json();

    const newContact = new Contact({
      Name,
      Email,
      Message,
    });

    await newContact.save();

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json({ success: false, error: 'Something went wrong!' }, { status: 500 });
  }
};
