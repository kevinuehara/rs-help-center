"use client";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { DrawerDialog } from "../components/FormVictim";
import { useEffect, useState } from "react";
import { User } from "@/types";
import { VictimCard } from "../components/VictimCard";

export default function Victims() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const data = await fetch("/api/user");
    const json = await data.json();
    const users = json.data;
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="w-screen">
      <Header />
      <main>
        <DrawerDialog />
        <div className="flex flex-wrap">
          {users &&
            users.map((user, key) => (
              <VictimCard key={user.id ? +user.id : key} victim={user} />
            ))}
        </div>
      </main>
    </div>
  );
}
