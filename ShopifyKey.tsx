import React from "react";
import { TextStyle, Card } from "@shopify/polaris";

export const KeyCard = ({
  title,
  note,
  setRemoveModalActive,
  setUpdateModalActive
}) => {
  return (
    <Card.Section
      title={title}
      actions={[
        {
          content: "削除",
          destructive: true,
          onAction: () => {
            setRemoveModalActive(true);
          }
        },
        {
          content: "メモを編集",
          onAction: () => {
            setUpdateModalActive(true);
          }
        }
      ]}
    >
      <p>{note}</p>
      <TextStyle variation="subdued">3 日前に生成されました</TextStyle>
    </Card.Section>
  );
};
