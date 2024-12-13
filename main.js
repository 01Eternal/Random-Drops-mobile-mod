const NPC = new NativeClass('Terraria', 'NPC');
const Item = new NativeClass('Terraria', 'Item');
const NewItem = Item['int NewItem(int X, int Y, int Width, int Height, int Type, int Stack, bool noBroadcast, int pfix, bool noGrabDelay, bool reverseLookup)'];

export function RNG(max) {
        return Math.floor(Math.random() * (max)) + 1
}

    NPC.NPCLoot_DropItems.hook((original, self, closestPlayer) => {
        original(self, closestPlayer);
    
        const ITEM_DROP_ID = RNG(5452);
         NewItem(self.position.X, self.position.Y, self.width, self.height, ITEM_DROP_ID, 1, false, 0, false, false);
        
    });
