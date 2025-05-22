import { test } from 'magnitude-test';

test('can log climbs and view them', { url: 'https://isheglov.github.io/climb-log/' }, async ({ ai }) => {
    // await ai.step('click on date, clean the field');
    // await ai.step('clear the date input field, type "12.01.2024", then press Enter');
    // await ai.step('click on calendar icon and set date to 12.01.2024');
    
    //await ai.step('scroll grades until you see grade 9(just 9, not 9-, not 9+)');
    await ai.step('find the button with the text "5" (without "+" or "-") and click it');
    await ai.step('select color blue');
    await ai.step('click "Log Climb"');
    //await ai.check('log climb grade 6 blue');
    await ai.check('should see logged climb grade 5 blue');

    //await ai.step('in the bottom navigation bar, click the icon located between the home icon and the graph icon (this is the list view tab)');
    await ai.step('go to the "full-log" tab');
});
