<!DOCTYPE html>: This is the document type declaration. It tells the web browser which version of HTML the page is written in. In this case, it's HTML5. It's required at the very beginning of an HTML document to ensure that the browser renders the page correctly.

<html lang="en">: This line defines the root element of the HTML document. The lang attribute specifies the language of the document, which in this case is English (en). This helps screen readers and search engines understand the language of the content for better accessibility and indexing.

<head>: The <head> element contains meta-information about the document, such as its title, character set, stylesheets, scripts, and other metadata. It's not displayed on the web page itself but is crucial for providing essential information to browsers and search engines.

<meta charset="UTF-8">: This meta tag specifies the character encoding for the document. UTF-8 is a widely used character encoding that supports a vast range of characters from various languages and symbols. It ensures that the text content of the document is interpreted and displayed correctly by the browser.

<meta name="viewport" content="width=device-width, initial-scale=1.0">: This meta tag configures the viewport settings for the webpage. It's particularly important for responsive web design. The width=device-width part sets the width of the viewport to the width of the device, and initial-scale=1.0 sets the initial zoom level when the page is first loaded. This ensures that the page renders properly on different devices and screen sizes.

<title>Document</title>: The <title> element sets the title of the document, which appears in the browser's title bar or tab. It's also used as the default name when users bookmark the page or share it on social media. Providing a descriptive and concise title is essential for both usability and search engine optimization (SEO).

</head>: This marks the end of the <head> section and signifies the beginning of the document's body content.

<body>: The <body> element contains the main content of the HTML document that is visible to users when they visit the webpage. This is where you would typically include headings, paragraphs, images, links, and other elements that make up the actual content of the page.

</body>: This marks the end of the <body> section, indicating that there's no more visible content to be displayed.

</html>: This marks the end of the HTML document. It's required to close the root <html> element and signifies the end of the document's structure.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
    <link rel="stylesheet" href="index.css">
</head>
<body>
     <h1>People entered : </h1>
     <h2 id="count-el">0</h2>
     <button id="increment-btn">INCREMENT</button>
     <script src="./index.js"></script>
</body>
</html>

Reason for the issue:
When you include HTML content inside a script tag, the browser interprets it as JavaScript code. Therefore, the button element was not displayed on the page because it was treated as JavaScript code rather than HTML markup. By moving the button outside of the script tag, it's now properly recognized as HTML and will be rendered as expected.
