import InventoryHeader from "@/components/inventory/InventoryHeader";
import InventoryStats from "@/components/inventory/InventoryStats";
import InventoryMovementsTable from "@/components/inventory/InventoryMovementsTable";
import InventoryDistribution from "@/components/inventory/InventoryDistribution";

export default function InventoryPage() {
  return (
    <main>
      <InventoryHeader />

      <InventoryStats />

      <div className="bg-white border-2 border-on-surface">
        <InventoryMovementsTable />
      </div>

      <InventoryDistribution />
    </main>
  );
}
