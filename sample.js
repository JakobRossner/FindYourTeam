// Static JavaScript file with finalized groups

const groups = [
  // Group 1
  [
    { name: 'Emma Collins', team: 'CYP Team' },
    { name: 'Stephen Richer', team: 'MH Team' },
    { name: 'Donna Griffin', team: 'UPLA Team' },
  ],
  // Group 2
  [
    { name: 'Lucy Stainer', team: 'Adult Team' },
    { name: 'Nick Jones', team: 'MH Team' },
    { name: 'Claire Uren', team: 'UPLA Team' },
  ],
  // Group 3
  [
    { name: 'Ryan Muldoon', team: 'Adult Team' },
    { name: 'Jo Hirdle', team: 'UPLA Team' },
    { name: 'Amanda Watson', team: 'Unnamed' },
  ],
  // Group 4
  [
    { name: 'Sharon Waight', team: 'Adult Team' },
    { name: 'Kristi Smith', team: 'Simulation Team' },
    { name: 'Cindy Cox', team: 'Adult Team' },
  ],
  // Group 5
  [
    { name: 'Andy Mercer', team: 'MH Team' },
    { name: 'Leslie Gelling', team: 'Adult Team' },
    { name: 'Helena De Rezende', team: 'Adult Team' },
  ],
  // Group 6
  [
    { name: 'Matthew Hartwell', team: 'Adult Team' },
    { name: 'Belinda Humphries', team: 'UPLA Team' },
    { name: 'Tracey Revuelta-Ruffolo', team: 'Simulation Team' },
  ],
  // Group 7
  [
    { name: 'Heidi Banks', team: 'UPLA Team' },
    { name: 'Sharon Holland', team: 'Adult Team' },
    { name: 'Sonya Chelvanayagam', team: 'MH Team' },
  ],
  // Group 8
  [
    { name: 'Teresa Burdett', team: 'MH Team' },
    { name: 'Rowena Slope', team: 'Adult Team' },
    { name: 'Debbie Holley', team: 'Unnamed' },
  ],
  // Group 9
  [
    { name: 'Scott McEwan', team: 'Adult Team' },
    { name: 'Emma Lucas', team: 'Adult Team' },
    { name: 'Ruth Thompson', team: 'Adult Team' },
  ],
  // Group 10
  [
    { name: 'Kelly Hislop Lennie', team: 'Adult Team' },
    { name: 'Meg Jadzinski', team: 'UPLA Team' },
    { name: 'Duncan Randall', team: 'CYP Team' },
  ],
  // Group 11
  [
    { name: 'Sue Green', team: 'Adult Team' },
    { name: 'Josh Wintrup', team: 'MH Team' },
    { name: 'Ashley Spriggs', team: 'Adult Team' },
  ],
  // Group 12
  [
    { name: 'Emma Bockle', team: 'Adult Team' },
    { name: 'Enrico Sgroi', team: 'Adult Team' },
    { name: 'Natasha Randall-Geddes', team: 'Simulation Team' },
  ],
  // Group 13
  [
    { name: 'Heidi Singleton', team: 'CYP Team' },
    { name: 'Sue Baron', team: 'Adult Team' },
    { name: 'Michele Board', team: 'Adult Team' },
  ],
  // Group 14
  [
    { name: 'Pramod Regmi', team: 'Adult Team' },
    { name: 'Emily Brooks', team: 'MH Team' },
    { name: 'Paula Shepherd', team: 'UPLA Team' },
  ],
  // Group 15
  [
    { name: 'Alex Hull', team: 'CYP Team' },
    { name: 'Tanya Andrewes', team: 'Adult Team' },
    { name: 'Bernice Law', team: 'Adult Team' },
    { name: 'Sasha Bryan', team: 'MH Team' },
    
  ],
  // Group 16
  [
    { name: 'Chantal Cox', team: 'Adult Team' },
    { name: 'Steve Ersser', team: 'Adult Team' },
    { name: 'Memory Tauringana', team: 'Adult Team' },
  ],
  // Group 17
  [
    { name: 'Linda Agyemang', team: 'Adult Team' },
    { name: 'Helen Aldridge', team: 'Adult Team' },
    { name: 'Josh Wintrup', team: 'MH Team' },
  ],
  // Group 18
  [
    { name: 'Catherine Hewitson', team: 'UPLA Team' },
    { name: 'Cindy Cox', team: 'Adult Team' },
    { name: 'Leslie Gelling', team: 'Adult Team' },
  ],
  // Group 19
  [
    { name: 'Telina Damon', team: 'Simulation Team' },
    { name: 'Sue Green', team: 'Adult Team' },
    { name: 'Matthew Hartwell', team: 'Adult Team' },
  ],
  // Group 20
  [
    { name: 'Angela Prah', team: 'Adult Team' },
    { name: 'Kerry Nel', team: 'UPLA Team' },
    { name: 'Nick Jones', team: 'MH Team' },
  ],
  // Group 21
  [
    { name: 'Steve Trenoweth', team: 'MH Team' },
    { name: 'Kelly Hislop Lennie', team: 'Adult Team' },
    { name: 'Amy Natt', team: 'Simulation Team' },
  ],
 // Group 22
[
  { name: 'Jonny Branney', team: 'Adult Team' },
  { name: 'Veronica Izquierdo Manrique', team: 'Adult Team' },
  { name: 'Janet James', team: 'Adult Team' }
]
];

const nameToGroupIndex = {
  // Group 1
  'Emma Collins': 0,
  'Stephen Richer': 0,
  'Donna Griffin': 0,
  // Group 2
  'Lucy Stainer': 1,
  'Nick Jones': 1,
  'Claire Uren': 1,
  // Group 3
  'Ryan Muldoon': 2,
  'Jo Hirdle': 2,
  'Amanda Watson': 2,
  // Group 4
  'Sharon Waight': 3,
  'Kristi Smith': 3,
  'Cindy Cox': 3,
  // Group 5
  'Andy Mercer': 4,
  'Leslie Gelling': 4,
  'Helena De Rezende': 4,
  // Group 6
  'Matthew Hartwell': 5,
  'Belinda Humphries': 5,
  'Tracey Revuelta-Ruffolo': 5,
  // Group 7
  'Heidi Banks': 6,
  'Sharon Holland': 6,
  'Sonya Chelvanayagam': 6,
  // Group 8
  'Teresa Burdett': 7,
  'Rowena Slope': 7,
  'Debbie Holley': 7,
  // Group 9
  'Scott McEwan': 8,
  'Emma Lucas': 8,
  'Ruth Thompson': 8,
  // Group 10
  'Kelly Hislop Lennie': 9,
  'Meg Jadzinski': 9,
  'Duncan Randall': 9,
  // Group 11
  'Sue Green': 10,
  'Josh Wintrup': 10,
  'Ashley Spriggs': 10,
  // Group 12
  'Emma Bockle': 11,
  'Enrico Sgroi': 11,
  'Natasha Randall-Geddes': 11,
  // Group 13
  'Heidi Singleton': 12,
  'Sue Baron': 12,
  'Michele Board': 12,
  // Group 14
  'Pramod Regmi': 13,
  'Emily Brooks': 13,
  'Paula Shepherd': 13,
  // Group 15
  'Alex Hull': 14,
  'Tanya Andrewes': 14,
  'Bernice Law': 14,
  'Sasha Bryan': 14,
  // Group 16
  'Chantal Cox': 15,
  'Steve Ersser': 15,
  'Memory Tauringana': 15,
  // Group 17
  'Linda Agyemang': 16,
  'Helen Aldridge': 16,
  'Josh Wintrup': 16,
  // Group 18
  'Catherine Hewitson': 17,
  'Cindy Cox': 17,
  'Leslie Gelling': 17,
  // Group 19
  'Telina Damon': 18,
  'Sue Green': 18,
  'Matthew Hartwell': 18,
  // Group 20
  'Angela Prah': 19,
  'Kerry Nel': 19,
  'Nick Jones': 19,
  // Group 21
  'Steve Trenoweth': 20,
  'Kelly Hislop Lennie': 20,
  'Amy Natt': 20,
 // Group 22
  'Steve Trenoweth': 21,
  'Kelly Hislop Lennie': 21,
  'Amy Natt': 21,
};

function getGroupByName(inputName) {
  if (!inputName) return null;
  
  const lowerInputName = inputName.toLowerCase().trim(); // Convert input to lowercase

  // Find the first matching name in `nameToGroupIndex` keys that includes the input
  const matchedName = Object.keys(nameToGroupIndex).find(key =>
    key.toLowerCase().includes(lowerInputName) // Partial, case-insensitive match
  );

  // If a match is found, return the corresponding group
  if (matchedName) {
    const groupIndex = nameToGroupIndex[matchedName];
    return groups[groupIndex]; // Return the group array for the matched name
  } else {
    return null; // No match found
  }
}

// Example usage:
// const userName = 'Emma Collins';
// const userGroup = getGroupByName(userName);
// console.log(`Group for ${userName}:`, userGroup);
