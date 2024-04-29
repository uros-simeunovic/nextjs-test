"use client";

import {
  Document,
  Image,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

interface Props {
  kupac: string;
  adresa: string;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  section: {
    margin: 20,
    padding: 10,
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    fontSize: 12,
  },
  logo: {
    width: 80,
    height: 80,
  },
});

export const DocPreview = ({ kupac, adresa }: Props) => {
  console.log(kupac);
  return (
    <PDFViewer width="1000" className="rounded-xl h-[80%]">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Image source={"/logo.png"} style={styles.logo} />
            <View>
              <Text>AKIDIS</Text>
              <Text>prodaja ostale odece Brstica</Text>
              <View>
                <Text>Brstica bb, 15314 Krupanj</Text>
                <Text>PIB: 11 1111 11 Maticni broj: 11 1111 11</Text>
                <Text>prodaja ostale odece Brstica</Text>
                <Text>prodaja ostale odece Brstica</Text>
              </View>
            </View>
          </View>
          <View>
            <View>
              <Text>Kupac</Text>
              <Text>Kupac: {kupac}</Text>
              <Text>Adresa: {adresa}</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
