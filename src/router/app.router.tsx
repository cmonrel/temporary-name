import { Arguments } from "../pages/arguments/ArgumentsLayout";
import { CharacterCreation } from "../pages/characterCreation/characterCreation";
import { Checks } from "../pages/checks/ChecksLayout";
import { Combat } from "../pages/combat/CombatLayout";
import { Crafting } from "../pages/crafting/CraftingLayout";
import { createBrowserRouter } from "react-router";
import { HomePage } from "../pages/home/homePage";
import { ItemsInfluence } from "../pages/itemsInfluence/ItemsInfluenceLayout";
import { Layout } from "../layout/Layout";
import { Magic } from "../pages/magic/MagicLayout";
import { Navigate } from "react-router";
import { Opponents } from "../pages/opponents/Opponents";
import { WoundHeallingSanity } from "../pages/woundsHealingSanity/WoundHeallingSanityLayout";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'character-creation',
                element: <CharacterCreation />
            },
            {
                path: 'arguments',
                element: <Arguments />
            },
            {
                path: 'checks',
                element: <Checks />
            },
            {
                path: 'combat',
                element: <Combat />
            },
            {
                path: 'crafting',
                element: <Crafting />
            },
            {
                path: 'items-influence',
                element: <ItemsInfluence />
            },
            {
                path: 'magic',
                element: <Magic />
            },
            {
                path: 'opponents',
                element: <Opponents />
            },
            {
                path: 'wounds-healing-sanity',
                element: <WoundHeallingSanity />
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to="/" />
    },
])