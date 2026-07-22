"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";


export default function Home() {
  return (
    <main className="py-12 bg-neutral-50 min-h-screen">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Enterprise Upskilling"
          title="Shared UI Primitives Verification"
          subtitle="Testing Container, SectionHeading, Card, and Button variants."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Primary Button Test</h3>
            <p className="text-neutral-600 mb-4">
              Testing standard primary button rendered as a button element.
            </p>
            <Button variant="primary" onClick={() => alert("Primary button clicked!")}>
              Primary Button
            </Button>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Secondary Link Test</h3>
            <p className="text-neutral-600 mb-4">
              Testing secondary button variant rendered as an anchor link tag.
            </p>
            <Button variant="secondary" href="#test">
              Secondary Link
            </Button>
          </Card>
        </div>
      </Container>
    </main>
  );
}

