// These are the breeds that work with the Dog API.
export const breeds = [
  { id: "affenpinscher", name: "Affenpinscher" },
  { id: "african", name: "African" },
  { id: "airedale", name: "Airedale" },
  { id: "akita", name: "Akita" },
  { id: "appenzeller", name: "Appenzeller" },
  { id: "australian/shepherd", name: "Shepherd Australian" },
  { id: "basenji", name: "Basenji" },
  { id: "beagle", name: "Beagle" },
  { id: "bluetick", name: "Bluetick" },
  { id: "borzoi", name: "Borzoi" },
  { id: "bouvier", name: "Bouvier" },
  { id: "boxer", name: "Boxer" },
  { id: "brabancon", name: "Brabancon" },
  { id: "briard", name: "Briard" },
  { id: "buhund/norwegian", name: "Norwegian Buhund" },
  { id: "bulldog/boston", name: "Boston Bulldog" },
  { id: "bulldog/english", name: "English Bulldog" },
  { id: "bulldog/french", name: "French Bulldog" },
  { id: "bullterrier/staffordshire", name: "Staffordshire Bullterrier" },
  { id: "cattledog/australian", name: "Australian Cattledog" },
  { id: "chihuahua", name: "Chihuahua" },
  { id: "chow", name: "Chow" },
  { id: "clumber", name: "Clumber" },
  { id: "cockapoo", name: "Cockapoo" },
  { id: "collie/border", name: "Border Collie" },
  { id: "coonhound", name: "Coonhound" },
  { id: "corgi/cardigan", name: "Cardigan Corgi" },
  { id: "cotondetulear", name: "Cotondetulear" },
  { id: "dachshund", name: "Dachshund" },
  { id: "dalmatian", name: "Dalmatian" },
  { id: "dane/great", name: "Great Dane" },
  { id: "deerhound/scottish", name: "Scottish Deerhound" },
  { id: "dhole", name: "Dhole" },
  { id: "dingo", name: "Dingo" },
  { id: "doberman", name: "Doberman" },
  { id: "elkhound/norwegian", name: "Norwegian Elkhound" },
  { id: "entlebucher", name: "Entlebucher" },
  { id: "eskimo", name: "Eskimo" },
  { id: "finnish/lapphund", name: "Lapphund Finnish" },
  { id: "frise/bichon", name: "Bichon Frise" },
  { id: "germanshepherd", name: "Germanshepherd" },
  { id: "greyhound/italian", name: "Italian Greyhound" },
  { id: "groenendael", name: "Groenendael" },
  { id: "havanese", name: "Havanese" },
  { id: "hound/afghan", name: "Afghan Hound" },
  { id: "hound/basset", name: "Basset Hound" },
  { id: "hound/blood", name: "Blood Hound" },
  { id: "hound/english", name: "English Hound" },
  { id: "hound/ibizan", name: "Ibizan Hound" },
  { id: "hound/plott", name: "Plott Hound" },
  { id: "hound/walker", name: "Walker Hound" },
  { id: "husky", name: "Husky" },
  { id: "keeshond", name: "Keeshond" },
  { id: "kelpie", name: "Kelpie" },
  { id: "komondor", name: "Komondor" },
  { id: "kuvasz", name: "Kuvasz" },
  { id: "labradoodle", name: "Labradoodle" },
  { id: "labrador", name: "Labrador" },
  { id: "leonberg", name: "Leonberg" },
  { id: "lhasa", name: "Lhasa" },
  { id: "malamute", name: "Malamute" },
  { id: "malinois", name: "Malinois" },
  { id: "maltese", name: "Maltese" },
  { id: "mastiff/bull", name: "Bull Mastiff" },
  { id: "mastiff/english", name: "English Mastiff" },
  { id: "mastiff/tibetan", name: "Tibetan Mastiff" },
  { id: "mexicanhairless", name: "Mexicanhairless" },
  { id: "mix", name: "Mix" },
  { id: "mountain/bernese", name: "Bernese Mountain" },
  { id: "mountain/swiss", name: "Swiss Mountain" },
  { id: "newfoundland", name: "Newfoundland" },
  { id: "otterhound", name: "Otterhound" },
  { id: "ovcharka/caucasian", name: "Caucasian Ovcharka" },
  { id: "papillon", name: "Papillon" },
  { id: "pekinese", name: "Pekinese" },
  { id: "pembroke", name: "Pembroke" },
  { id: "pinscher/miniature", name: "Miniature Pinscher" },
  { id: "pitbull", name: "Pitbull" },
  { id: "pointer/germanlonghair", name: "Germanlonghair Pointer" },
  { id: "pointer/german", name: "German Pointer" },
  { id: "pomeranian", name: "Pomeranian" },
  { id: "poodle/medium", name: "Medium Poodle" },
  { id: "poodle/miniature", name: "Miniature Poodle" },
  { id: "poodle/standard", name: "Standard Poodle" },
  { id: "poodle/toy", name: "Toy Poodle" },
  { id: "pug", name: "Pug" },
  { id: "puggle", name: "Puggle" },
  { id: "pyrenees", name: "Pyrenees" },
  { id: "redbone", name: "Redbone" },
  { id: "retriever/chesapeake", name: "Chesapeake Retriever" },
  { id: "retriever/curly", name: "Curly Retriever" },
  { id: "retriever/flatcoated", name: "Flatcoated Retriever" },
  { id: "retriever/golden", name: "Golden Retriever" },
  { id: "ridgeback/rhodesian", name: "Rhodesian Ridgeback" },
  { id: "rottweiler", name: "Rottweiler" },
  { id: "saluki", name: "Saluki" },
  { id: "samoyed", name: "Samoyed" },
  { id: "schipperke", name: "Schipperke" },
  { id: "schnauzer/giant", name: "Giant Schnauzer" },
  { id: "schnauzer/miniature", name: "Miniature Schnauzer" },
  { id: "segugio/italian", name: "Italian Segugio" },
  { id: "setter/english", name: "English Setter" },
  { id: "setter/gordon", name: "Gordon Setter" },
  { id: "setter/irish", name: "Irish Setter" },
  { id: "sharpei", name: "Sharpei" },
  { id: "sheepdog/english", name: "English Sheepdog" },
  { id: "sheepdog/shetland", name: "Shetland Sheepdog" },
  { id: "shiba", name: "Shiba" },
  { id: "shihtzu", name: "Shihtzu" },
  { id: "spaniel/blenheim", name: "Blenheim Spaniel" },
  { id: "spaniel/brittany", name: "Brittany Spaniel" },
  { id: "spaniel/cocker", name: "Cocker Spaniel" },
  { id: "spaniel/irish", name: "Irish Spaniel" },
  { id: "spaniel/japanese", name: "Japanese Spaniel" },
  { id: "spaniel/sussex", name: "Sussex Spaniel" },
  { id: "spaniel/welsh", name: "Welsh Spaniel" },
  { id: "spitz/japanese", name: "Japanese Spitz" },
  { id: "springer/english", name: "English Springer" },
  { id: "stbernard", name: "Stbernard" },
  { id: "terrier/american", name: "American Terrier" },
  { id: "terrier/australian", name: "Australian Terrier" },
  { id: "terrier/bedlington", name: "Bedlington Terrier" },
  { id: "terrier/border", name: "Border Terrier" },
  { id: "terrier/cairn", name: "Cairn Terrier" },
  { id: "terrier/dandie", name: "Dandie Terrier" },
  { id: "terrier/fox", name: "Fox Terrier" },
  { id: "terrier/irish", name: "Irish Terrier" },
  { id: "terrier/kerryblue", name: "Kerryblue Terrier" },
  { id: "terrier/lakeland", name: "Lakeland Terrier" },
  { id: "terrier/norfolk", name: "Norfolk Terrier" },
  { id: "terrier/norwich", name: "Norwich Terrier" },
  { id: "terrier/patterdale", name: "Patterdale Terrier" },
  { id: "terrier/russell", name: "Russell Terrier" },
  { id: "terrier/scottish", name: "Scottish Terrier" },
  { id: "terrier/sealyham", name: "Sealyham Terrier" },
  { id: "terrier/silky", name: "Silky Terrier" },
  { id: "terrier/tibetan", name: "Tibetan Terrier" },
  { id: "terrier/toy", name: "Toy Terrier" },
  { id: "terrier/welsh", name: "Welsh Terrier" },
  { id: "terrier/westhighland", name: "Westhighland Terrier" },
  { id: "terrier/wheaten", name: "Wheaten Terrier" },
  { id: "terrier/yorkshire", name: "Yorkshire Terrier" },
  { id: "tervuren", name: "Tervuren" },
  { id: "vizsla", name: "Vizsla" },
  { id: "waterdog/spanish", name: "Spanish Waterdog" },
  { id: "weimaraner", name: "Weimaraner" },
  { id: "whippet", name: "Whippet" },
  { id: "wolfhound/irish", name: "Irish Wolfhound" },
];
