import React from 'react';

const PrinterSetup = () => {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
        How to Connect a Printer to Your Computer
      </h1>
      <div className="grid grid-cols-1 gap-8">
        {setupMethods.map(({ id, head, desc }) => (
          <div key={id} className="border rounded-lg p-6 bg-white shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">{head}</h2>
            <ul className="list-disc ml-6">
              {desc.map((step, index) => (
                <li key={index} className="mb-2">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PrinterSetup;

const setupMethods = [
  {
    id: 1,
    head: 'METHOD 1: Using Windows',
    desc: [
      'Place a document in your scanner face down. Before you go any further, make sure your scanner is turned on and connected to your computer.',
      'Press the Start button. In the bottom-left corner side of the screen, click the Windows logo.',
      'In Start, type fax and scan. The Windows Fax and Scan software will be found by doing so.',
      'Select Windows Fax and Scan from the drop-down menu. It’s located at the very top of the Start menu.',
      'Select New Scan from the drop-down menu. This option can be found in the Fax and Scan window’s upper-left corner. There will be a new window open.',
      'Double-check that your scanner is in working order. If your scanner’s name isn’t listed at the top of the window, or if the wrong scanner is listed, click Change… in the upper-right corner of the window and pick your scanner’s name.',
      "Choose a document type. Select the type of document (e.g., Photo) in the drop-down box after clicking the 'Profile' drop-down box.",
      "Pick a color scheme for your document. Select between Color or Black & White from the 'Color format' drop-down box. It’s also possible that your scanner may have different color options.",
      "Choose a file type. Click the 'File type' drop-down box, then select the file type (such as PDF or JPG) to save the scanned document to your computer. It’s recommended to choose PDF when scanning anything other than a photo.",
      "Make any further changes to the page’s options. You may have other options (for example, 'Resolution') that you can change before scanning your document, depending on your scanner.",
      'Go to the Preview tab. It can be found near the bottom side of the window. This will bring up a preliminary scan of your scanned document to show you what it will look like. If your document appears crooked, uneven, or cut off, reposition it in your scanner and then preview it again to see if your change fixed the problem.',
      'Select Scan from the menu. It can be found near the bottom of the window. Your document will begin scanning onto your computer using the options and format you’ve chosen.',
      'Locate the scanned document. To do so, follow these steps: ● Start the program. ● Open the File Explorer application. ● On the left side of the window, select Documents. ● Select the Scanned Documents folder and double-click it.',
    ],
  },

  {
    id: 2,
    head: 'METHOD 2: Using the Mac',
    desc: [
      'Place a document in your scanner face down. Before you go any further, make sure your scanner is turned on and connected to your computer.',
      'Select Apple from the navigation bar. In the top-left corner side of the screen, click the Apple logo. There will be a drop-down menu.',
      'Select System Preferences from the drop-down menu… It’s the first option in the drop-down menu.',
      'Select Printers & Scanners from the drop-down menu. The right side of the System Preferences pane has a printer-shaped icon.',
      'Choose a scanner. In the left-hand column, click the name of your scanner (or printer).',
      'Select the Scan option. It’s located at the very top of the window.',
      'Select Open Scanner… This can be found near the top of the Scan tab’s window.',
      'Select Show Details from the menu. It’s in the window’s lower-right corner.',
      "Choose a file format. Click the 'Format' drop-down box, then select a file format (such as PDF or JPEG) to save your document. It’s recommended to choose PDF when scanning anything other than a photo.",
      "Decide on a color scheme. Select a color option from the 'Kind' drop-down box at the top of the page (e.g., Black and White).",
      "Decide where you want to store your files. Select a folder in which you want to save your scanned document from the 'Save To' drop-down box (e.g., Desktop).",
      "Alter the page’s other options. You may wish to adjust the 'Resolution' or 'Orientation' values here depending on the type of file you’re scanning.",
      'Select Scan from the menu. It’s at the window’s bottom-right corner. The scanning of your paper into your computer will begin. You’ll be able to find it in your chosen save location after it’s finished.',
    ],
  },
];
