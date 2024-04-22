import React, { useEffect, useState } from 'react';
import { GoTrash } from "react-icons/go";
import { FaShare } from "react-icons/fa";
import axios from 'axios';
import { api } from '@/services/api';

type ListItem = {
  text: string;
  checked?: boolean;
};
type textProps = {
  user: string,
  text: string,
  checked: boolean
}

export default function List() {
  const [items, setItems] = useState<ListItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get<textProps[]>("/task");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {items.map((item, index) => (
        <ul key={index} className="w-[65%] mb-0">
          <li className="whitespace-pre-wrap border border-gray-500 p-4 rounded-lg flex justify-between items-baseline align-baseline">
            <div>
              <span className="flex-grow flex flex-col text-justify ">
                <div className='flex gap-2'>
                  {item.checked && (
                    <>
                      <span className='bg-blue-500 rounded-md p-1 text-white text-xs '>Publico </span>
                      <button className='bg-transparent rounded-md p-1 text-white '>
                        <FaShare color='#3183FF' />
                      </button>
                    </>
                  )}
                </div>
                <span className='h-full'> {item.text}</span>
              </span>
            </div>
            <GoTrash color='red' className='cursor-pointer flex-shrink-0' size={20} />
          </li>
        </ul>
      ))}
    </>
  );
}
