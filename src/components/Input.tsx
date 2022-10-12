import { InputHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from '@radix-ui/react-slot';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface InputRootProps {
  children: ReactNode;
}

function InputRoot({ children }: InputRootProps) {
  return (
    <div className={clsx(
      "flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300",
    )}>{children}</div>
  )
}

InputRoot.displayName = 'TextInput-Root';

export interface InputIconProps {
  children: ReactNode
}

function InputIcon(props: InputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
 }

 InputIcon.displayName = 'TextInput-Icon';

export interface InputItemProps extends InputHTMLAttributes<HTMLInputElement> { }

function InputItem(props: InputItemProps) {
  return (
      <input 
        className="bg-transparent flex-1 text-gray-100 text-xsplaceholder:text-gray-400 outline-none" 
        {...props} 
      />
  );
}

InputItem.displayName = 'TextInput-Item';

export const TextInput = {
  Root: InputRoot,
  Input: InputItem,
  Icon: InputIcon
}
