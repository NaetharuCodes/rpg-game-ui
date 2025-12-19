import JournalEntry from "../components/JournalEntry/JournalEntry";

const sampleText = [
  "The ancient parchment crackled in Aldric's weathered hands as he traced the arcane symbols that would lead him to the Tower of Crystalline Whispers, where the legendary Mage Thornweaver dwelt in solitary contemplation among his tomes of forbidden knowledge. At dawn's first light, when the twin moons still hung like pale sentinels over the Misty Vale, he would begin his perilous journey through the Shadowfen—past the gnarled oaks that spoke in riddles and the silver stream where pixies danced upon moonbeams. His heart thundered with both trepidation and hope, for he knew that if he could but gain an audience with the wizard, if he could present the Crystal of Eternal Memories recovered from the depths of the Dragon's Maw, then perhaps—just perhaps—the great sorcerer would deign to teach him the secrets of the First Magic, the power that flowed through the very veins of the world itself, pulsing with the heartbeat of ancient gods long forgotten by mortal men.",
  "Seraphina clutched the midnight-blue cloak tighter against the howling wind as she climbed the thousand stone steps to the Wizard's Gate, where it was said that Archmage Silvanos the Eternal awaited those brave—or foolish—enough to seek his counsel. Three riddles she must answer, three trials she must endure, and if the stars smiled upon her quest, she would stand before the most powerful wielder of magic in all the Seven Realms and beg him to lift the curse that had befallen her kingdom.",
];

const Journal = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[800px]">
        <JournalEntry
          date="High Moon"
          title="Magic Wizard Meeting"
          content={sampleText}
        />
        <JournalEntry
          date="High Moon"
          title="Magic Wizard Meeting"
          content={sampleText}
        />
      </div>
    </div>
  );
};

export default Journal;
