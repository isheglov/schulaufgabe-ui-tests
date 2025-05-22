import { test } from 'magnitude-test';

test('can log climbs and view them', { url: 'https://isheglov.github.io/climb-log/' }, async ({ ai }) => {
    await ai.step('klicke auf das Datumsfeld und leere es');
    await ai.step('leere das Datumsfeld, tippe "12.01.2024" und drücke Enter');
    await ai.step('scrolle durch die Schwierigkeitsgrade bis du "10" siehst (nur 10, nicht 10- oder 10+)');
    await ai.step('klicke auf den Button mit der Beschriftung genau "10" und nicht "10+" oder "10-"');
    await ai.step('wähle die Farbe Blau');
    await ai.step('klicke auf "Log Climb"');
    await ai.step('wechsle zum Verlauf-Tab');
    await ai.check('der Eintrag mit Schwierigkeitsgrad 10 und Farbe Blau vom 12. Januar 2024 sollte sichtbar sein');
});
