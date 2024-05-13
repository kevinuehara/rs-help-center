import { User } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface VictimCardProps {
  key: number;
  victim: User;
}

const formatDate = (date?: Date) => {
  if (!date) return "Desconhecido";

  return new Date(date).toLocaleDateString("pt-BR");
};

export const VictimCard = ({ victim }: VictimCardProps) => {
  return (
    <div className="m-2 border-4 p-2 flex flex-col w-72">
      <h1 className="text-xl font-bold">{victim.name}</h1>
      <div className="flex w-full justify-center items-center">
        <Image
          className="mt-5 mb-4"
          src={victim.photoUrl ?? "/people.webp"}
          width={150}
          height={150}
          alt={`vítima ${victim.name}`}
          priority
        />
      </div>
      <div className="flex">
        <label className="font-bold">Idade:</label>
        <label className="ml-2">{victim.age}</label>
      </div>
      <div className="flex">
        <label className="font-bold">Local:</label>
        <label className="ml-2">{victim.locale}</label>
      </div>
      <div className="flex">
        <label className="font-bold">Desaparecimento:</label>
        <label className="ml-2">{formatDate(victim.dateMissing)}</label>
      </div>
      <hr className="w-full border-2 mt-1" />
      <h2 className="font-bold text-lg">Contatos</h2>
      <div className="flex">
        <label className="font-bold">Telefone:</label>
        <label className="ml-2">{victim.phone}</label>
      </div>
      <div className="flex">
        <label className="font-bold">Email:</label>
        <label className="ml-2">{victim.email}</label>
      </div>
    </div>
  );
};
