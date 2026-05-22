import ProductsHeader from "@/components/products/ProductHeader";
import ProductsStats from "@/components/products/ProductsStats";
import ProductsFilters from "@/components/products/ProductsFilters";
import ProductsTable from "@/components/products/ProductsTable";
import Pagination from "@/components/Pagination";
import ProductsInsights from "@/components/products/ProductsInsights";

export default function ProductsPage() {
  return (
    <div>
      <ProductsHeader />
      <ProductsStats />

      <div className="bg-white border border-slate-200">
        <ProductsFilters />
        <ProductsTable />
        <Pagination />
      </div>

      <ProductsInsights />
    </div>
  );
}
