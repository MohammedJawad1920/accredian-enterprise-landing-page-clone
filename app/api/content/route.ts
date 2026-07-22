import { NextResponse } from 'next/server';
import features from '@/data/features.json';
import testimonials from '@/data/testimonials.json';
import programs from '@/data/programs.json';

export async function GET() {
  return NextResponse.json({
    features,
    testimonials,
    programs,
  });
}
