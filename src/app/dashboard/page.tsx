"use client";
import React, { useState } from "react";
import Button from "@/components/Button/button";
import Textarea from "@/components/Textarea";
import { ChangeEvent } from "react";
import { api } from "@/services/api";
import { useClerk } from "@clerk/nextjs";
import Dialog from "@/components/Dialog/Dialog";
import List from "@/components/List/list";

type textProps = {
  user: string;
  text: string;
  checked: boolean;
};

export default function Page() {
  const [text, setText] = useState("");
  const [publicTask, setPublicTask] = useState(false);
  const [textArray, setTextArray] = useState<textProps[]>([]);
  const { user } = useClerk();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (text === "") return;

    try {
      let userLogin = "";
      if (user && user.id) {
        userLogin = user.emailAddresses[0].emailAddress;
      }
      const newTask = { userLogin, text, checked: publicTask };

      setTextArray((prevTextArray: any) => [...prevTextArray, newTask]);

      api.post("/task", newTask)
        .then(() => {
          setText("");
          setPublicTask(false);
        })
        .catch((error) => {
          alert("Erro ao registrar a tarefa");
          console.log(error);
        });
    } catch (error) {
      alert("Erro ao registrar a tarefa");
      console.log(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPublicTask(event.target.checked);
  };

  return (
    <div>
      <div className="bg-black w-full h-[450px] justify-center ">
        <main className="flex  flex-col items-center pt-10 gap-8 text-white text-start ">
          <h1 className="w-[65%] h-0 text-3xl font-bold mb-2">Qual sua tarefa?</h1>
          <form
            onSubmit={handleSubmit}
            className="w-full  flex flex-col items-center p-2 gap-4"
          >
            <Textarea
              placeholder="Digite sua tarefa..."
              value={text}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                setText(event.target.value)
              }
            />
            <div className="justify-center align-baseline items-baseline w-[65%]">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={publicTask}
                onChange={handleChange}
              />{" "}
              <span className="text-white">Deixar tarefa pública</span>
              <Dialog>
                <Button type="submit">Registrar</Button>
              </Dialog>
            </div>
          </form>
        </main>
      </div>
      <div className="w-full justify-center h-full">
        <main className="flex  flex-col items-center pt-10 gap-8 text-black text-start mb-14">
          <h1 className="h-0 text-3xl font-bold mb-8">Minhas tarefas</h1>
          <List />
        </main>
      </div>
    </div>
  );
}
