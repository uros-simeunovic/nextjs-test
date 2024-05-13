"use client";

import { NewTransactionSheet } from "@/components/new-transaction-sheet";
import { useMutationState } from "@tanstack/react-query";

export const SheetProvider = () => {
  const isMounted = useMutationState();

  if (!isMounted) return null;

  return (
    <>
      <NewTransactionSheet />
    </>
  );
};
