import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = ({
  props,
}: {
  props: {
    title: string;
    description: string;
  };
}) => {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-4 sm:px-5 sm:py-2 md:px-8 md:py-3 lg:px-20 lg:py-6">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">{props.title}</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          {props.description}
        </CardContent>
      </Card>
    </div>
  );
};

export default Features;
