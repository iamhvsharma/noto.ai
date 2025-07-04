import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
}

const Features = ({ title, description }: FeatureProps) => {
  return (
    <Card className="w-full h-full bg-background border border-border shadow-md hover:shadow-lg transition-shadow rounded-xl">
      <CardHeader className="-mb-6">
        <CardTitle className="text-xl font-semibold text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="lg:text-lg sm:text-md text-sm text-muted-foreground">
        {description}
      </CardContent>
    </Card>
  );
};

export default Features;
