import AgenciesHeader from "@/_components/Agencies/AgenciesHeader";
import AgenciesTable from "@/_components/Agencies/AgenciesTable";
import SearchAndFilters from "@/_components/Agencies/SearchAndFilters";
import React from "react";

const AgenciesPage = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-background p-4 md:p-6 overflow-hidden">
      <AgenciesHeader />
      <SearchAndFilters />
  <div className="overflow-x-auto">
    <AgenciesTable/>
  </div>    </div>
  );
};

export default AgenciesPage;
