"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SigninBtn } from "@/features/auth/SigninBtn";
import { Layout } from "@/components/layout";

export default function RouteError() {
  return (
    <Layout>
        <Card>
      <CardHeader>
        <CardTitle>
          Sorry, you need to be logged to see this page
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <SigninBtn/>
      </CardFooter>
    </Card>
    </Layout>
  );
}