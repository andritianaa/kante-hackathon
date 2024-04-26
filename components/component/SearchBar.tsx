
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export function SearchBar() {
  return (
    <div key="1" className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center space-x-4">
        <div className="relative w-full max-w-md">
          <SearchBar/>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="home-garden">Home & Garden</SelectItem>
                <SelectItem value="sports-outdoors">Sports & Outdoors</SelectItem>
              </SelectContent>
            </Select>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuLabel>Select Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem>Clothing</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Electronics</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Home & Garden</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Sports & Outdoors</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under50">Under $50</SelectItem>
                <SelectItem value="50to100">$50 - $100</SelectItem>
                <SelectItem value="100to500">$100 - $500</SelectItem>
                <SelectItem value="over500">Over $500</SelectItem>
              </SelectContent>
            </Select>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuLabel>Select Price Range</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem>Under $50</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>$50 - $100</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>$100 - $500</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Over $500</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="relative w-full mt-2">
        <Input className="pr-12" placeholder="Search for products, brands, and more..." type="text" />
        <Button className="absolute right-2 top-1/2 -translate-y-1/2" type="submit">
          Search
        </Button>
      </div>
    </div>
  )
}
