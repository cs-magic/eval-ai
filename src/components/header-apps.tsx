"use client"

import { SubAppIcon } from "@/components/header-app"
import { subAppsIcons } from "@/config/system"
import { Grip } from "lucide-react"
import { IconContainer } from "../../packages/common-ui/components/icon-container"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../packages/common-ui/shadcn/shadcn-components/dropdown-menu"
import { cn } from "../../packages/common-ui/shadcn/utils"

export const Apps = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={"hidden sm:block"}>
        <IconContainer size={"lg"}>
          {/*<IoApps suppressHydrationWarning />*/}
          <Grip />
        </IconContainer>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={"mr-2 p-4 flex flex-col gap-4 max-h-[480px] overflow-auto"}
      >
        <div
          className={cn(
            "grid",
            subAppsIcons.length >= 3 ? "grid-cols-3" : "grid-cols-2",
          )}
        >
          {subAppsIcons.map((subApp, index) => (
            <SubAppIcon subAppIcon={subApp} key={index} />
          ))}
        </div>

        {/*<Button*/}
        {/*  variant={"outline"}*/}
        {/*  className={"w-full"}*/}
        {/*  onClick={() => {*/}
        {/*    toast.info("敬请期待！")*/}
        {/*  }}*/}
        {/*>*/}
        {/*  查看CS魔法社的更多产品*/}
        {/*</Button>*/}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
