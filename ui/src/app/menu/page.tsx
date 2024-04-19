"use client";
import React, { FC, useEffect, useState } from "react";
import { CategoryState } from "@/components/categoryContainer/CategoryState";
import { CardData, UserCard } from "@/components/cards/UserCard";
import { useCategory, useFood } from "../globals";
import axios from "axios";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, handleClose, children }) => {
  if (!isOpen) {
    return null;
  }
  let [number, setNumber] = useState(1);

  function Minus() {
    if (number > 0) {
      number = number - 1;
      setNumber(number);
    }
  }
  function Plus() {
    number = number + 1;
    setNumber(number);
  }

  return (
    <div className="w-screen mx-auto flex top-0 h-full justify-center items-center fixed z-1 bg-gray-500 bg-opacity-70">
      <div className="flex items-center  z-1 absolute inset-0 w-11/12 lg:w-1/2  justify-center  mx-auto ">
        <div className="flex flex-col overflow-hidden lg:rounded-xl  max md:flex-row  md:flex-1  mx-auto">
          <div className="p-5  flex  bg-white md:flex-1 h-[500px] w-full rounded-xl lg:mx-auto gap-5">
            <div className="h-[500px] hidden md:flex md:w-1/2 ">
              <img
                className="rounded-md w-[500px]  h-[460px] cover"
                src="../images/pizza.svg"
                alt="Shoes"
              />
            </div>
            <div className="flex flex-col w-full  md:w-1/2 ">
              <div className="flex justify-end ">
                <button className="modal-close-button " onClick={handleClose}>
                  X
                </button>
              </div>
              <div className="mt-4 w-11/12 mx-auto">
                <h1 className="font-semibold lg:text-3xl lg:font-bold">
                  Main Pizza
                </h1>
                <p className="lg:font-semibold text-green-600">34,800$</p>
                <p className="mt-8 font-semibold">Орц</p>
                <div className="w-11/12 p-2 bg-slate-200 rounded-lg mt-2">
                  <p className="text-gray-500">
                    Хулуу , төмс , лууван , сонгино , самрын үр , цөцгийн тос
                  </p>
                </div>
                <p className="mt-8 font-semibold">Number</p>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={Minus}
                    className="py-1 px-3 bg-green-500 rounded-md text-white"
                  >
                    -
                  </button>
                  <p className="font-normal">{number}</p>
                  <button
                    onClick={Plus}
                    className="py-1 px-3 bg-green-500 rounded-md text-white"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleClose}
                  className="container bg-green-500 mt-4 p-3 rounded-md text-white"
                >
                  Сагслах
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const { foods, setFoods }: any = useFood();
  const { category }: any = useCategory();

  function fetchFood() {
    axios
      .get(`http://localhost:8000/food?categoryId=${category}`)
      .then((foods) => setFoods(foods.data));
  }

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <div>
      <div className="mt-10 ">
        <CategoryState />
      </div>
      <div className="app-container bg-white mb-10">
        <div className="container mx-auto">
          <UserCard />
        </div>

        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <p></p>
        </Modal>
      </div>
    </div>
  );
};

export default Menu;
