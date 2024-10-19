import Link from "next/link";
import UiIcon from "../Ui/UiIcon";
import Wrapper from "../Ui/Wrapper";
import { footerLinks } from "@/Utils/constants";

export default function Footer() {
  

  return (
    <footer className="px-3 md:px-6 bg-slate-200 pt-10 pb-12">
      <Wrapper>
        <div className="grid gap-6 md:grid-cols-7">
          <div className="md:col-span-3">
            <h3 className="font-bold text-lg text-slate-800 mb-10">HRTouch</h3>
            <div className="stroke-slate-800 fill-slate-800 flex items-center gap-4">
              <UiIcon icon="Instagram" />
              <UiIcon icon="LinkedIn" />
              <UiIcon icon="Facebook"/>                
              <UiIcon icon="Twitter" />
            </div>
          </div>
          <div className="md:col-span-4 grid gap-3 grid-cols-2 md:grid-cols-4 justify-between">
            {footerLinks.map((footerink)=>(
              <div key={footerink.title}>
                <h4 className="text-slate-800 font-semibold text-base mb-2">{footerink.title}</h4>
                <div className="flex flex-col gap-2">
                  {footerink.links.map((link)=>(
                    <Link className="text-sm text-slate-500 hover:text-primary-base" href={''} key={link}>{link}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full border-t border-slate-400 mt-8 text-xs pt-6 text-slate-500">
          <p>Copyright © 2024 HRTouch. All rights reserved.</p>
        </div>
      </Wrapper>
    </footer>
  )
}