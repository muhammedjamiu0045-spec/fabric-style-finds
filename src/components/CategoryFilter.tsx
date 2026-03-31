import { Button } from "@/components/ui/button";

const CATEGORIES = [
  { label: "All", value: "" },
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Fabrics", value: "fabrics" },
  { label: "Accessories", value: "accessories" },
];

interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
}

export const CategoryFilter = ({ selected, onChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => (
        <Button
          key={cat.value}
          variant={selected === cat.value ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(cat.value)}
          className="rounded-full"
        >
          {cat.label}
        </Button>
      ))}
    </div>
  );
};
