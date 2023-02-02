import React, { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useAlert } from "react-alert"

const TagsCard = ({ tags, setTags }) => {
  const [states, setState] = useState({
    copied: false
  })
  const RemoveTag = (tag) => {
    const index = tags.indexOf(tag)
    let newData
    if (index > -1) {
      tags.splice(index, 1)
    }
    newData = [...tags]
    setTags(newData)
  }
  //   const alert = useAlert()

  return (
    <div className="tag-container">
      {tags.length !== 0 ? (
        <div className="tag-button-section">
          <CopyToClipboard
            text={tags}
            onCopy={() => setState({ copied: true })}
          >
            <button className="copy-all-tags-btn">Copy All</button>
          </CopyToClipboard>
          <div>
            <div class="alert-info-msg">
              <i
                class="fa fa-info-circle"
                style={{ color: "#55adee" }}
                aria-hidden="true"
              ></i>
              <strong className="m-2"> Click on a tag to copy</strong>
            </div>
          </div>
        </div>
      ) : null}
      {tags?.map((tag, index) => (
        <div className="tagsItem mt-2" key={index}>
          <CopyToClipboard text={tag} onCopy={() => setState({ copied: true })}>
            <span className="tag-value">{tag}</span>
          </CopyToClipboard>
          <i
            className="fa fa-times tag-remove-btn"
            onClick={() => RemoveTag(tag)}
          ></i>
        </div>
      ))}
    </div>
  )
}

export default TagsCard
