"use client";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "../components/ui/button";
import { useState } from "react";

export const Birth = () => {
  const currentDate = new Date().toISOString().split("T")[0];
let showBirthDay = false;
  if(!localStorage.getItem("birth")) showBirthDay = true

  const [isShow, setIsShow] = useState(showBirthDay)
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    undefined
  ); // Initialiser l'état avec undefined

  // Gestionnaire d'événements pour mettre à jour l'état avec la date sélectionnée
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  // Gestionnaire d'événements pour enregistrer la date
  const handleSave = () => {
    if (selectedDate) {
      // Faites quelque chose avec la date sélectionnée
      localStorage.setItem("birth", selectedDate)
      setIsShow(false)
    }
  };
  if(isShow){
  return (
    <div className="z-[999] fixed w-screen h-screen flex justify-center items-center bg-white top-0 left-0">
      <Card className="p-8 pb-4 w-fit bg-white dark:bg-black flex flex-col justify-center items-center gap-4">
        <CardTitle>Ajouter votre date de naissance</CardTitle>
        <CardContent className="flex gap-4 flex-col justify-center items-center w-full">
          <Input
            type="date"
            className="w-full p-4"
            max={currentDate}
            onChange={handleDateChange}
          />
          <Button className="w-full" onClick={handleSave}>
            Enregistrer
          </Button>
        </CardContent>
      </Card>
    </div>
  )}
};
