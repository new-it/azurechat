import Typography from "@/components/typography";
import { Card } from "@/components/ui/card";
import { AI_NAME } from "@/features/theme/customise";
import { FC } from "react";
import { NewChat } from "../../chat-menu/new-chat";

interface Prop {}

export const StartNewChat: FC<Prop> = (props) => {
  return (
    <div className="grid grid-cols-5 w-full items-center container mx-auto max-w-3xl justify-center h-full gap-9">
      <div className="col-span-2 gap-5 flex flex-col flex-1">
        <img src="/ai-icon.png" className="w-36" />
      </div>
      <Card className="col-span-3 flex flex-col gap-5 p-5 ">
        <Typography variant="h4" className="text-primary">
          Welcome to {AI_NAME}.
        </Typography>
        <div className="flex flex-col gap-2">
          <p className="">
          ...our in-house version of ChatGPT that you can safely use to speed up your work processes. Here you'll have the power of an advanced language model, designed to answer your queries efficiently and reliably.
          </p>
        </div>
        <div className="-mx-5 -mb-5 p-5 flex flex-col border-t bg-muted">
          <table>
             <tr>
              <td><NewChat /></td>
              <td>← Create a new chat</td>
             </tr>
          </table>
        </div>
      </Card>
    </div>
  );
};
