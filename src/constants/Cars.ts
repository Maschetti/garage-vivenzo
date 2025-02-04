export type CarState = "parked" | "with client" | "at the hall";

export interface Car {
  id: number;
  model: string;
  owner: string;
  number: string;
  color: string;
  state: CarState;
}

export const Cars: Car[] = [
  { id: 1, model: "Toyota Corolla", owner: "John Doe", number: "ABC-1234", color: "Red", state: "with client" },
  { id: 2, model: "Honda Civic", owner: "Jane Smith", number: "XYZ-5678", color: "Blue", state: "at the hall" },
  { id: 3, model: "Ford Mustang", owner: "Alice Johnson", number: "DEF-9101", color: "Black", state: "parked" },
  { id: 4, model: "Chevrolet Camaro", owner: "Bob Brown", number: "GHI-1122", color: "Yellow", state: "with client" },
  { id: 5, model: "Tesla Model S", owner: "Charlie Davis", number: "JKL-3344", color: "White", state: "at the hall" },
  { id: 6, model: "BMW X5", owner: "Daniel Evans", number: "MNO-5566", color: "Gray", state: "parked" },
  { id: 7, model: "Audi A4", owner: "Eleanor Fisher", number: "PQR-7788", color: "Silver", state: "with client" },
  { id: 8, model: "Mercedes-Benz C-Class", owner: "George Harris", number: "STU-9900", color: "Green", state: "at the hall" },
  { id: 9, model: "Hyundai Elantra", owner: "Hannah James", number: "VWX-2233", color: "Brown", state: "parked" },
  { id: 10, model: "Nissan Altima", owner: "Ian Kelly", number: "YZA-4455", color: "Purple", state: "with client" },
  { id: 11, model: "Kia Sportage", owner: "Jack Lewis", number: "BCD-6677", color: "Orange", state: "at the hall" },
  { id: 12, model: "Volkswagen Jetta", owner: "Karen Martinez", number: "EFG-8899", color: "Pink", state: "parked" },
  { id: 13, model: "Subaru Outback", owner: "Liam Nelson", number: "HIJ-0011", color: "Gold", state: "with client" },
  { id: 14, model: "Mazda CX-5", owner: "Megan Owens", number: "KLM-2234", color: "Beige", state: "at the hall" },
  { id: 15, model: "Jeep Grand Cherokee", owner: "Nathan Parker", number: "NOP-5567", color: "Teal", state: "parked" },
  { id: 16, model: "Dodge Charger", owner: "Olivia Quinn", number: "QRS-7789", color: "Maroon", state: "with client" },
  { id: 17, model: "Ford F-150", owner: "Paul Roberts", number: "TUV-9910", color: "Navy", state: "at the hall" },
  { id: 18, model: "Chevrolet Silverado", owner: "Rachel Smith", number: "WXY-1123", color: "Cyan", state: "parked" },
  { id: 19, model: "GMC Sierra", owner: "Steven Thompson", number: "ZAB-3345", color: "Magenta", state: "with client" },
  { id: 20, model: "Ram 1500", owner: "Tracy Underwood", number: "CDE-5568", color: "Lime", state: "at the hall" }
];