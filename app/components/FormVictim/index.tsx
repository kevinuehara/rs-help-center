"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "../../hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePicker } from "../DatePicker";
import { User } from "@/types";
import { useToast } from "@/components/ui/use-toast";

export function DrawerDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-yellow-700 hover:bg-yellow-500 rounded-lg text-white m-3"
          >
            Adicionar Vítima +
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>Adicionar Vítima</DialogTitle>
            <DialogDescription>
              Adicione uma vítima desaparecida
            </DialogDescription>
          </DialogHeader>
          <ProfileForm onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="bg-yellow-700 hover:bg-yellow-500 rounded-lg text-white m-3"
        >
          Adicionar Vítima +
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-white">
        <DrawerHeader className="text-left">
          <DrawerTitle>Adicionar Vítima</DrawerTitle>
          <DrawerDescription>
            Adicione uma vítima desaparecida
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4 " onClose={() => setOpen(false)} />
        <DrawerFooter className="pt-2 ">
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({
  className,
  onClose,
}: React.ComponentProps<"form"> & { onClose: VoidFunction }) {
  const [date, setDate] = React.useState<Date>();
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [age, setAge] = React.useState<number>();
  const [locale, setLocale] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [file, setFile] = React.useState<any>();
  const { toast } = useToast();

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    const user: User = {
      description,
      email,
      name,
      phone,
      isMissed: true,
      locale,
      age,
      dateMissing: date,
    };

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data: { success: boolean; fileName: string } =
        await response.json();

      Object.assign(user, { photoUrl: data.fileName });

      const saveUserResponse = await fetch("api/user", {
        method: "POST",
        body: JSON.stringify(user),
      });

      const saveUserJson = await saveUserResponse.json();

      if (saveUserJson.success) {
        onClose();
        toast({
          description: "Dados cadastrados com sucesso!",
        });
      }
    } catch (error) {
      toast({
        description: "Erro ao salvar os dados...",
      });
    }
  };

  return (
    <form
      className={cn("grid items-start gap-4 bg-white", className)}
      onSubmit={handleSubmit}
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Nome da vítima/desaparecido</Label>
        <Input
          type="name"
          id="name"
          placeholder="Marcelo Souza"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="name">Idade</Label>
        <Input
          type="number"
          id="name"
          placeholder="28"
          value={age}
          onChange={(e) => setAge(+e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="locale">Localização do Desaparecimento</Label>
        <Input
          type="text"
          id="locale"
          placeholder="Novo Hamburgo"
          required
          value={locale}
          onChange={(e) => setLocale(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email para contato</Label>
        <Input
          type="email"
          id="email"
          placeholder="email@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Telefone</Label>
        <Input
          type="phone"
          id="phone"
          placeholder="(55) 55555-5555"
          required
          value={phone}
          onChange={(e) => setPhone(e.currentTarget.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Descrição</Label>
        <Input
          type="text"
          id="description"
          placeholder="Descrição Complementar"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="locale">Data de Desaparecimento</Label>
        <DatePicker date={date} changeDate={(date) => setDate(date)} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="photo">Foto</Label>
        <Input
          id="photo"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <Button type="submit">Salvar</Button>
    </form>
  );
}
