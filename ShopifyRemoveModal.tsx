import * as React from "react";
import { Modal } from "@shopify/polaris";

export const ShopifyRemoveModal = ({
  isRemoveModalActive,
  setRemoveModalActive
}) => {
  return (
    <Modal
      title="トークンを削除します"
      open={isRemoveModalActive}
      onClose={() => {
        setRemoveModalActive(false);
      }}
      primaryAction={{
        destructive: true,
        content: "削除する",
        onAction: () => {
          alert("primaryAction");
        }
      }}
      secondaryActions={[
        {
          content: "キャンセル",
          onAction: () => {
            setRemoveModalActive(false);
          }
        }
      ]}
    >
      <Modal.Section>
        {/* <Stack vertical><Stack.Item fill>	</Stack.Item>	</Stack> */}
        <p>
          トークンを削除してもよろしいですか？
          <br />
          このトークンを利用しているサイトは取込ができなくなります。
          <br />
          この操作は元に戻すことはできません。
        </p>
      </Modal.Section>
    </Modal>
  );
};
