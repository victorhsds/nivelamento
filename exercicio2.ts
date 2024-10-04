type Person = {
    id: number;
    name: string;
    bio: string;
  };
  
  let lista: Person[] = [
    {"id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
  ];
  
    const getBioById = (id: number): string | undefined => 
    lista.find(item => item.id === id)?.bio;
  
  const getNameById = (id: number): string | undefined => 
    lista.find(item => item.id === id)?.name;
  
  const deleteItemById = (id: number): Person[] => 
    lista.filter(item => item.id !== id);
  
  const updatePersonById = (id: number, updates: Partial<Person>): Person[] =>
    lista.map(item => item.id === id ? { ...item, ...updates } : item);
  
  function getBioByIdImperative(id: number): string | undefined {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id === id) {
        return lista[i].bio;
      }
    }
    return undefined;
  }
  
  function getNameByIdImperative(id: number): string | undefined {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id === id) {
        return lista[i].name;
      }
    }
    return undefined;
  }
  
  function deleteItemByIdImperative(id: number): void {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id === id) {
        lista.splice(i, 1);
        return;
      }
    }
  }
  
  function updatePersonByIdImperative(id: number, updates: Partial<Person>): void {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id === id) {
        lista[i] = { ...lista[i], ...updates };
        return;
      }
    }
  }
