import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { SendEmail } from "./SendEmail";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <Card className="w-full max-w-lg bg-[#231c28]/90 border border-[#315B8C]/50 text-[#F5EBDD] backdrop-blur-md shadow-[0_8px_32px_rgba(49,91,140,0.35)] rounded-xl">
      <form action={SendEmail}>
        <CardHeader className="border-b border-[#315B8C]/25 pb-4">
          <CardTitle className="text-xl font-rubik text-[#F5EBDD] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F2765E]" />
            Direct Transmission
          </CardTitle>
          <CardDescription className="text-xs font-mono text-[#F5EBDD]/70">
            Send an inquiry or interview invite directly to Ishwar Patro.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4 space-y-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name" className="text-xs font-mono text-[#F5EBDD]/80">
              Your Name
            </Label>
            <Input
              type="text"
              name="name"
              required
              placeholder="e.g. Hiring Manager / Engineering Lead"
              className="bg-[#16121b] border-[#315B8C]/40 text-[#F5EBDD] placeholder:text-[#F5EBDD]/40 text-xs font-mono focus:border-[#F2765E]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-xs font-mono text-[#F5EBDD]/80">
              Your Email Address
            </Label>
            <Input
              type="email"
              name="SenderEmail"
              required
              placeholder="name@company.com"
              className="bg-[#16121b] border-[#315B8C]/40 text-[#F5EBDD] placeholder:text-[#F5EBDD]/40 text-xs font-mono focus:border-[#F2765E]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="message" className="text-xs font-mono text-[#F5EBDD]/80">
              Transmission Message
            </Label>
            <textarea
              placeholder="Discuss project requirements, role openings, or engineering collaborations..."
              name="message"
              required
              rows={4}
              className="resize-none flex min-h-[90px] w-full rounded-md border border-[#315B8C]/40 bg-[#16121b] px-3 py-2 text-xs font-mono text-[#F5EBDD] placeholder:text-[#F5EBDD]/40 focus:border-[#F2765E] focus-visible:outline-none focus:ring-1 focus:ring-[#F2765E]"
            />
          </div>
        </CardContent>
        <CardFooter className="border-t border-[#315B8C]/25 pt-4">
          <Button
            type="submit"
            className="w-full bg-[#F2765E] hover:bg-[#F2765E]/90 text-[#121014] font-rubik font-semibold text-xs py-2.5 flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Transmit Message</span>
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
