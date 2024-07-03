import * as React from "react";
import { Modal, FormLayout, TextField,Toast,Frame,Banner ,Link} from "@shopify/polaris";

export const ShopifyUpdateModal = ({ isUpdateModalActive, setUpdateModalActive }) => {
const [active, setActive] = React.useState(false);
const toggleActive = React.useCallback(() => setActive(active => !active), []);
const toastMarkup = active ? (
    <Toast error content="ERROR!" onDismiss={toggleActive} />
  ) : null;
  return (<Frame>
  {toastMarkup}
    <Modal
      title="名前の変更"
      open={isUpdateModalActive}
      onClose={() => {
        setUpdateModalActive(false);
      }}
      primaryAction={{
        content: "保存する",
        onAction: () => {
          toggleActive()
        }
      }}
      secondaryActions={[
        {
          content: "キャンセル",
          onAction: () => {
            setUpdateModalActive(false);
          }
        }
      ]}
    >
      <Modal.Section>
        {/* <Stack vertical><Stack.Item fill>	</Stack.Item>	</Stack> */}
        <FormLayout>
         <Banner
                title="dfplus.io連携App（仮）へようこそ"
                status="info"
                onDismiss={() => {}}
              >
                <p>
                  ストアとdfplus.ioのサイトを連携して商品データを出力しましょう。
                  <br />
                  商品データCSVプレビューで出力する方針データーの内容が確認できます。
                </p>
                {/* <TextContainer></TextContainer> */}
                <Link url="https://help.shopify.com/manual" external>
                  詳しい使い方はこちら。
                </Link>
              </Banner>
        <TextField
          label="トークンの名前を入力してください"
          onFocus={() => {}}
          onChange={() => {}}
          // value={}
        />
                </FormLayout>
      </Modal.Section>
    </Modal></Frame>
  );
};
