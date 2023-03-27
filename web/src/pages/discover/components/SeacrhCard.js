import React from "react";
import {
  Box,
  Heading,
  VStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FcConferenceCall,
  FcCalendar,
  FcClock,
  FcRating,
  FcLike,
  FcSportsMode,
} from "react-icons/fc";
import { useFormik } from "formik";

const SeacrhCard = () => {
  
  //?=============TAKE INPUT VALUES===========

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      kisiSayisi: "",
      tarih: "",
      saat: "",
    },

    onSubmit: (values) => {
      
      //?============EĞER INPUTLAR BOŞ İSE BİŞEY YAPMA===========

      if (values.kisiSayisi === '' || values.saat === '' || values.tarih === '') return false

      console.log(values)




    },
  });

  //?=============BUTTON COMPONENTS===========

  const Buttons = ({ icon, title }) => {
    return (
      <Button
        bg="#ddd"
        size="xs"
        w="100%"
        fontWeight="regular"
        rightIcon={icon}
      >
        {title}
      </Button>
    );
  };

  return (
    <React.Fragment>
      <Box
        bg="#fff"
        boxShadow="rgb(51 51 51 / 10%) 0px 1px 4px"
        borderRadius={10}
        p={5}
        w={["100%", "100%", "100%", "100%"]}
      >
        {/*=====================SEARCH CARD TITLE==================== */}
        <Box mb={5} w="100%">
          <Heading
            fontWeight="semibold"
            fontSize={["14px", "16px", "18px", "20px"]}
          >
            EDİRNEDEKİ RESTORANLAR
          </Heading>
        </Box>

        <Heading
          fontWeight="semibold"
          fontSize="small"
          mb="15px"
          color="orange"
        >
          Filtrele :
        </Heading>

        {/*=====================SEARCH CARD INPUTS==================== */}

        <VStack
          as="form"
          w="100%"
          display="flex"
          flexDirection={["column", "column", "column", "row"]}
          alignItems="center"
          gap={4}
          onSubmit={handleSubmit}
        >
          {/*===================KİŞİ SAYISI================= */}

          <InputGroup mt="0.5rem">
            <InputLeftAddon
              borderColor="rgba(0,0,0,0.3)"
              children={<FcConferenceCall fontSize={16} />}
            />

            <Select
              name="kisiSayisi"
              value={values.kisiSayisi}
              onChange={handleChange}
              borderLeftRadius="none"
              textAlign="center"
              autoComplete="off"
              focusBorderColor="rgb(248, 179, 51)"
              borderColor="rgba(0,0,0,0.3)"
              fontSize="small"
            >
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
            </Select>
          </InputGroup>

          {/*===================TARİH================= */}

          <InputGroup>
            <InputLeftAddon
              borderColor="rgba(0,0,0,0.3)"
              children={<FcCalendar fontSize={16} />}
            />

            <Input
              name="tarih"
              value={values.tarih}
              onChange={handleChange}
              textAlign="center"
              type="date"
              borderLeftRadius="none"
              fontSize="small"
              autoComplete="off"
              focusBorderColor="rgb(248, 179, 51)"
              borderColor="rgba(0,0,0,0.3)"
              min="2023-03-24"
              max="2024-01-01"
            />
          </InputGroup>

          {/*===================SAAT================= */}

          <InputGroup>
            <InputLeftAddon
              borderColor="rgba(0,0,0,0.3)"
              children={<FcClock fontSize={16} />}
            />

            <Select
              name="saat"
              value={values.saat}
              onChange={handleChange}
              borderLeftRadius="none"
              textAlign="center"
              autoComplete="off"
              focusBorderColor="rgb(248, 179, 51)"
              borderColor="rgba(0,0,0,0.3)"
              fontSize="small"
            >
              <option value="09:30">09:30</option>
              <option value="10:30">10:30</option>
              <option value="11:30">11:30</option>
              <option value="12:30">12:30</option>
              <option value="13:30">13:30</option>
              <option value="14:30">14:30</option>
              <option value="15:30">15:30</option>
              <option value="16:30">16:30</option>
              <option value="17:30">17:30</option>
              <option value="18:30">18:30</option>
              <option value="19:30">19:30</option>
              <option value="20:30">20:30</option>
              <option value="21:30">21:30</option>
              <option value="22:30">22:30</option>
            </Select>
          </InputGroup>

          {/*===================ARAMA BUTONU================= */}

          <InputGroup>
            <Button
              type="submit"
              w="100%"
              bg="rgb(248, 179, 51)"
              color="#fff"
              fontWeight="regular"
              fontSize="small"
              _hover={{ bg: "orange" }}
            >
              Uygula
            </Button>
          </InputGroup>
        </VStack>

        {/*===================FİLTRELEME BUTONLARI================= */}
        <Stack
          direction={["column", "column", "column", "row"]}
          alignItems="center"
          pt={10}
        >
          <Buttons icon={<FcLike />} title="En iyisi" />
          <Buttons icon={<FcSportsMode />} title="En Yakın" />
          <Buttons icon={<FcRating />} title="Aile Dostu" />
        </Stack>

        {/*===================AÇIKLAMA TEXT================= */}
        <Stack py={10}>
          <Text px={5} fontSize={13} textAlign="center">
            Edirne bölgesindeki en iyi restoranlari mi ariyorsun? Kahvalti, öğle
            ve akşam yemeği için dİşarida yiyebileceğin en iyi yerleri senin
            için derledik. İstanbul bölgesindeki en iyi restoranlari keşfetmeye
            hazir misin? Hadi başlayalim! Bu arada, çevrimiçi bir masa ayirtmayi
            unutmayin. Önceden rezervasyon yaptirmazsaniz, restorandan oturmadan
            geri çevrilme riskiniz var!
          </Text>
        </Stack>

        {/*========================FAVORI RESTORANLARI LİSTESİ===================== */}
      </Box>
    </React.Fragment>
  );
};

export default SeacrhCard;