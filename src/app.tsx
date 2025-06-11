import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
// pages
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import InvoiceCreate from "./pages/InvoiceCreate";
import Payments from "./pages/Payments";
import SalesOrders from "./pages/SalesOrders";
import Customers from "./pages/Customers";
import Vendors from "./pages/Vendors";
import CustomerGroups from "./pages/CustomerGroups";
import FinancialReports from "./pages/FinancialReports";
import TaxReports from "./pages/TaxReports";
import InventoryReports from "./pages/InventoryReports";
import CompanySettings from "./pages/CompanySettings";
import UserManagement from "./pages/UserManagement";
import Integrations from "./pages/Integrations";
import GeneralSettings from "./pages/GeneralSettings";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";
import StockManagement from "./pages/StockManagement";
import Products from "./pages/Products";
import PurchaseOrders from "./pages/PurchaseOrders";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return   <Dashboard /> ;
      case "invoices":
        return <Invoices />;
      case "invoices/create":
        return <InvoiceCreate />;
      case "payments":
        return <Payments />;
      case "sales-orders":
        return <SalesOrders />;
      case "products":
        return <Products />;
      case "categories":
        return <Categories />;
      case "inventory/stock":
        return <StockManagement />;
      case "purchase-orders":
        return <PurchaseOrders />;
      case "customers":
        return <Customers />;
      case "vendors":
        return <Vendors />;
      case "customer-groups":
        return <CustomerGroups />;
      case "reports/financial":
        return <FinancialReports />;
      case "reports/tax":
        return <TaxReports />;
      case "reports/inventory":
        return <InventoryReports />;
      case "settings/company":
        return <CompanySettings />;
      case "settings/users":
        return <UserManagement />;
      case "settings/integrations":
        return <Integrations />;
      case "settings":
        return <GeneralSettings />;
      default:
        return <NotFound />;
    }
  };

  const queryClient = new QueryClient();

  return (
	  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="invenbill-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar setCurrentPage={setCurrentPage} />
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="w-full">{renderPage()}</main>
            </div>
          </div>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
  );
}
