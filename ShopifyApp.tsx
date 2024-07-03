import React, { useState, useCallback } from "react";
import enTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/dist/styles.css";

import {
  AppProvider,
  Page,
  Layout,
  FormLayout,
  Card,
  Banner,
  TextField,
  Pagination,
  Stack,
  ButtonGroup,
  TextStyle,
  Icon,
  DataTable,
  TextContainer,
  Modal,
  Heading,
  Frame,
  Button,
  Toast,
  Link
} from "@shopify/polaris";

import { ClipboardMinor } from "@shopify/polaris-icons";

import { ShopifyRemoveModal } from "./ShopifyRemoveModal";
import { ShopifyUpdateModal } from "./ShopifyUpdateModal";
import { ShopifyTable } from "./ShopifyTable";
import { KeyCard } from "./ShopifyKey";

type Props = {
  keys: [];
  samples: {
    headings: any;
    rows: any;
  };
};
export const ShopifyApp = ({ keys, samples }: Props) => {
  const [isUpdateModalActive, setUpdateModalActive] = useState(true);
  const [isRemoveModalActive, setRemoveModalActive] = useState(false);
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive(active => !active), []);
  const toastMarkup = active ? (
    <Toast content="Message sent" onDismiss={toggleActive} />
  ) : null;

  return (
    <AppProvider i18n={enTranslations}>
      <Frame>
        <Page>
          <Layout>
            <Layout.Section>
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
              <Button onClick={toggleActive}>Show Toast</Button>
              {toastMarkup}
            </Layout.Section>

            <Layout.AnnotatedSection
              title="連携キー"
              description={
                <React.Fragment>
                  <p>
                    dfplus.ioのサイトと連携に私用する「連携キー」を生成します。
                    <br />
                    連携キーは、dfplus.ioの「マスターデータ」|「ECシステム連携」|「Shopify」の取込設定内の「アクセスキー（仮）」に入力してください
                  </p>
                  <Link url="https://help.shopify.com/manual" external>
                    詳しくはこちら。
                  </Link>
                </React.Fragment>
              }
            >
              <Card>
                <Card.Section>
                  <Stack alignment="center">
                    {/* Stack distribution="trailing" */}
                    <Stack.Item fill>
                      <p>連携キーは最大 3 つまで生成できます。</p>
                    </Stack.Item>
                    <Stack.Item>
                      <Button primary disabled>
                        連携キーを生成する
                      </Button>
                    </Stack.Item>
                  </Stack>
                </Card.Section>

                <Card.Section>
                  <Banner title="新しい連携キーを生成しました" status="warning">
                    <p>
                      セキュリティー上の理由により、連携キーは一度しか表示されません。
                      <br />
                      連携キーをコピーして利用してください。
                    </p>
                  </Banner>
                </Card.Section>
                <Card.Section
                  title="未使用"
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
                  <TextField
                    label={
                      <TextStyle variation="subdued">
                        10 分前に生成されました
                      </TextStyle>
                    }
                    onChange={() => {}}
                    // connectedRight={
                    //   <Button primary onClick={() => {}}>
                    //     Copy link
                    //   </Button>
                    // }
                    // https://polaris-icons.shopify.com/
                    suffix={<Icon source={ClipboardMinor} color="base" />}
                  />
                </Card.Section>

                {keys.map(k => (
                  <KeyCard
                    title={k.attributes.used_by}
                    note={k.attributes.note}
                    setUpdateModalActive={setUpdateModalActive}
                    setRemoveModalActive={setRemoveModalActive}
                  />
                ))}
              </Card>

              {/* Modals */}
              <ShopifyUpdateModal
                isUpdateModalActive={isUpdateModalActive}
                setUpdateModalActive={setUpdateModalActive}
              />

              <ShopifyRemoveModal
                isRemoveModalActive={isRemoveModalActive}
                setRemoveModalActive={setRemoveModalActive}
              />
            </Layout.AnnotatedSection>

            <Layout.Section>
              <ShopifyTable samples={samples.attributes} />
            </Layout.Section>
          </Layout>
        </Page>
      </Frame>
    </AppProvider>
  );
};
