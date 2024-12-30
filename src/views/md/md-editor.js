function formatHeadingTags(html) {
  return html.replace(/<h([1-6])([^>]*)>(.*?)<\/h\1>/g, (match, level, attributes, content) => {
    return `<h${level}>
      <span class="mjx-editor-prefix"></span>
      <span class="mjx-editor-content">
        <span class="mjx-editor-content-prefix"></span>
        <span class="mjx-editor-content-h">${content}</span>
        <span class="mjx-editor-content-suffix"></span>
      </span>
      <span class="mjx-editor-suffix"></span>
    </h${level}>`
  })
}

function wrapSectionsWithHeadings(html) {
  return html.replace(/(<h[1-6][^>]*>.*?<\/h[1-6]>)/g, (match) => {
    return `</section></section>${match}<section class="mjx-section"><section class="mjx-editor-section">`
  })
}

function CustomContent(html) {
  const wrappedHtml = wrapSectionsWithHeadings(html)

  const formattedHtml = formatHeadingTags(wrappedHtml)

  const finalHtml = `<div id="mjx-editor" data-tool="mjx-editor-software-preview" class="mjx-md-skin-1">
    <section class="_editor">
      <section class="mjx-section">
        <section class="mjx-editor-section">
          ${formattedHtml}
        </section>
      </section>
    </section>
  </div>`

  return finalHtml
}

export default CustomContent
