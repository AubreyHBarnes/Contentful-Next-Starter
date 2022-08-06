import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import markdownStyles from './markdown-styles.module.css'
import RichTextAsset from './rich-text-asset'

const customMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
  [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
    // find the entry in the entryBlockMap by ID
    const entry = entryBlockMap.get(node.data.target.sys.id);

    // render the entries as needed by looking at the __typename 
    // referenced in the GraphQL query
    if (entry.__typename === "CodeBlock") {
      return (
        <pre>
          <code>{entry.code}</code>
        </pre>
      );
    }

   if (entry.__typename === "VideoEmbed") {
     return (
        <iframe
          src={entry.embedUrl}
          height="100%"
          width="100%"
          frameBorder="0"
          scrolling="no"
          title={entry.title}
          allowFullScreen={true}
        />
      );
    }

  },
  // [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
  //   // find the asset in the assetBlockMap by ID
  //   const asset = assetBlockMap.get(node.data.target.sys.id);

  //   // render the asset accordingly
  //   return (
  //     <img src={asset.url} alt="My image alt text" />
  //   );
  // },
})

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        {documentToReactComponents(
          content.json,
          customMarkdownOptions(content)
        )}
      </div>
    </div>
  )
}


// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { BLOCKS } from "@contentful/rich-text-types";

// // Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked entries e.g. code blocks)
// // and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

// function renderOptions(links) {
//   // create an asset block map
//   const assetBlockMap = new Map();
//   // loop through the assets and add them to the map
//   for (const asset of links.assets.block) {
//     assetBlockMap.set(asset.sys.id, asset);
//   }

//   // create an entry block map
//   const entryBlockMap = new Map();
//   // loop through the assets and add them to the map
//   for (const entry of links.entries.block) {
//     entryBlockMap.set(entry.sys.id, entry);
//   }

//   return {
//     // other options...

//     renderNode: {
//       // other options...

//       [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
//         // find the entry in the entryBlockMap by ID
//         const entry = entryBlockMap.get(node.data.target.sys.id);

//         // render the entries as needed by looking at the __typename 
//         // referenced in the GraphQL query
//         if (entry.__typename === "CodeBlock") {
//           return (
//             <pre>
//               <code>{entry.code}</code>
//             </pre>
//           );
//         }

//        if (entry.__typename === "VideoEmbed") {
//          return (
//             <iframe
//               src={entry.embedUrl}
//               height="100%"
//               width="100%"
//               frameBorder="0"
//               scrolling="no"
//               title={entry.title}
//               allowFullScreen={true}
//             />
//           );
//         }

//       },
//       [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
//         // find the asset in the assetBlockMap by ID
//         const asset = assetBlockMap.get(node.data.target.sys.id);

//         // render the asset accordingly
//         return (
//           <img src={asset.url} alt="My image alt text" />
//         );
//       },
//     },
//   };
// }

// // Render post.body.json to the DOM using
// // documentToReactComponents from "@contentful/rich-text-react-renderer"

// export default function BlogPost(props) {
//   const { post } = props;

//   return <>{documentToReactComponents(post.body.json, renderOptions(post.body.links))}</>;
// }