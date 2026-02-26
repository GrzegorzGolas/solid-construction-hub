import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";
import { getEmailHref } from "@/lib/contact";

const typyObiektow = [
  "Hala magazynowa",
  "Hala produkcyjna",
  "Hala rolnicza",
  "Wiata stalowa",
  "Chłodnia / obiekt izolowany",
  "Carport / zadaszenie",
  "Inny",
];

const zakresy = [
  "dokumentacja architektoniczna",
  "dokumentacja techniczna",
  "konstrukcja",
  "obudowa",
  "montaż",
  "kompleksowo",
];

const FormularzWyceny = () => {
  const navigate = useNavigate();
  const [typ, setTyp] = useState("");
  const [szerokosc, setSzerokosc] = useState("");
  const [dlugosc, setDlugosc] = useState("");
  const [wysokosc, setWysokosc] = useState("");
  const [miasto, setMiasto] = useState("");
  const [wojewodztwo, setWojewodztwo] = useState("");
  const [zakresSelected, setZakresSelected] = useState<string[]>([]);
  const [termin, setTermin] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [uwagi, setUwagi] = useState("");
  const [sending, setSending] = useState(false);

  const toggleZakres = (z: string) => {
    setZakresSelected((prev) =>
      prev.includes(z) ? prev.filter((x) => x !== z) : [...prev, z]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Build mailto body
    const body = [
      `Typ obiektu: ${typ}`,
      `Wymiary: ${szerokosc} × ${dlugosc} × ${wysokosc} m`,
      `Lokalizacja: ${miasto}, woj. ${wojewodztwo}`,
      `Zakres: ${zakresSelected.join(", ")}`,
      `Planowany termin: ${termin}`,
      `Telefon: ${telefon}`,
      `Email: ${email}`,
      uwagi ? `Uwagi: ${uwagi}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const subject = encodeURIComponent(`Zapytanie ofertowe – ${typ}`);
    const encodedBody = encodeURIComponent(body);

    window.location.href = `${getEmailHref()}?subject=${subject}&body=${encodedBody}`;

    setTimeout(() => {
      navigate("/dziekujemy");
    }, 500);
  };

  return (
    <section id="formularz" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy font-heading mb-4">
            Zamów wycenę
          </h2>
          <p className="text-steel-light max-w-2xl mx-auto">
            Wypełnij formularz, a przygotujemy indywidualną wycenę w ciągu 48 godzin.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6 bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm"
        >
          {/* Typ obiektu */}
          <div className="space-y-2">
            <Label className="text-navy font-semibold">Typ obiektu *</Label>
            <Select value={typ} onValueChange={setTyp} required>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz typ obiektu" />
              </SelectTrigger>
              <SelectContent>
                {typyObiektow.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Wymiary */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-navy font-semibold">Szerokość (m) *</Label>
              <Input
                type="number"
                placeholder="np. 24"
                value={szerokosc}
                onChange={(e) => setSzerokosc(e.target.value)}
                required
                min="1"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-navy font-semibold">Długość (m) *</Label>
              <Input
                type="number"
                placeholder="np. 48"
                value={dlugosc}
                onChange={(e) => setDlugosc(e.target.value)}
                required
                min="1"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-navy font-semibold">Wysokość (m) *</Label>
              <Input
                type="number"
                placeholder="np. 8"
                value={wysokosc}
                onChange={(e) => setWysokosc(e.target.value)}
                required
                min="1"
              />
            </div>
          </div>

          {/* Lokalizacja */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-navy font-semibold">Miasto *</Label>
              <Input
                placeholder="np. Rzeszów"
                value={miasto}
                onChange={(e) => setMiasto(e.target.value)}
                required
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-navy font-semibold">Województwo *</Label>
              <Select value={wojewodztwo} onValueChange={setWojewodztwo} required>
                <SelectTrigger>
                  <SelectValue placeholder="Wybierz" />
                </SelectTrigger>
                <SelectContent>
                  {["podkarpackie", "lubelskie", "małopolskie", "świętokrzyskie", "mazowieckie"].map((w) => (
                    <SelectItem key={w} value={w}>{w}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Zakres */}
          <div className="space-y-3">
            <Label className="text-navy font-semibold">Zakres prac *</Label>
            <div className="grid grid-cols-2 gap-3">
              {zakresy.map((z) => (
                <label
                  key={z}
                  className="flex items-center gap-2 cursor-pointer text-sm text-steel"
                >
                  <Checkbox
                    checked={zakresSelected.includes(z)}
                    onCheckedChange={() => toggleZakres(z)}
                  />
                  {z}
                </label>
              ))}
            </div>
          </div>

          {/* Termin */}
          <div className="space-y-2">
            <Label className="text-navy font-semibold">Planowany termin realizacji *</Label>
            <Input
              placeholder="np. III kwartał 2026"
              value={termin}
              onChange={(e) => setTermin(e.target.value)}
              required
              maxLength={100}
            />
          </div>

          {/* Kontakt */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-navy font-semibold">Telefon *</Label>
              <Input
                type="tel"
                placeholder="np. 575 857 929"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
                required
                maxLength={20}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-navy font-semibold">E-mail *</Label>
              <Input
                type="email"
                placeholder="twoj@email.pl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
              />
            </div>
          </div>

          {/* Uwagi */}
          <div className="space-y-2">
            <Label className="text-navy font-semibold">Uwagi</Label>
            <Textarea
              placeholder="Dodatkowe informacje, specjalne wymagania..."
              value={uwagi}
              onChange={(e) => setUwagi(e.target.value)}
              maxLength={2000}
              rows={4}
            />
          </div>

          <Button
            type="submit"
            className="w-full btn-gold !rounded-lg"
            disabled={sending || !typ || !szerokosc || !dlugosc || !wysokosc || !miasto || !wojewodztwo || zakresSelected.length === 0 || !termin || !telefon || !email}
          >
            <Send className="w-5 h-5" />
            {sending ? "Wysyłanie..." : "Wyślij zapytanie"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FormularzWyceny;
