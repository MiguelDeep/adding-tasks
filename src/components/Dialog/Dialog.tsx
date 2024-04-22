import React, { useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Button from '../Button/button';
import { CircleCheckBig } from 'lucide-react';

interface AlertDialogProps {
  children: React.ReactNode
}


export default function AlertDialogDemo({ children }: AlertDialogProps) {

  return (

    <AlertDialog.Root >
      <AlertDialog.Trigger asChild >
        {children}
      </AlertDialog.Trigger>
      <AlertDialog.Portal >
        <AlertDialog.Overlay className="p-10 bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 text-black" />
        <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <AlertDialog.Title className="p-10 flex flex-col  text-mauve12 m-0 text-[17px] font-medium text-black w-full text-center justify-center items-center">
            <CircleCheckBig size={90} color='blue' className='mb-4'/>
            Tarefa adicionada com sucesso.
          </AlertDialog.Title>
          <div className="flex w-full justify-center gap-[25px]  ">
           <div className='w-32'>
           <AlertDialog.Cancel asChild>
              <Button type="submit" className='  text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]' >Ok</Button>
            </AlertDialog.Cancel>

           </div>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

