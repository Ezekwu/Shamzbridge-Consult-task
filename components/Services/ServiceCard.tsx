'use client';

import UiIcon from "../Ui/UiIcon";
import { Icons } from "../Ui/UiIcon";
export type Service = {
  icon: Icons;
  title: string;
  description: string;
}

interface Props {
  service: Service
}

export default function ServiceCard({service}:Props) {
  return (
    <article className="group border border-slate-200 rounded-md py-6 px-4 bg-slate-50 hover:bg-primary-base cursor-pointer transition duration-120 ease-in ">
      <div className="stroke-slate-800 fill-slate-800 group-hover:stroke-primary-base group-hover:fill-primary-base mb-3 w-12 h-12 rounded-full flex justify-center items-center border group-hover:border-none border-slate-200 group-hover:bg-white"><UiIcon icon={service.icon} size="32"/></div>
      <h4 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-white">{service.title}</h4>
      <p className="text-slate-500 group-hover:text-slate-100 text-sm font-light">{service.description}</p>
    </article>
  )
}