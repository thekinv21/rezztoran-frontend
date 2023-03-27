import React from "react";
import { Box } from "@chakra-ui/react";
import Title from "../title/title";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  return (
    // <React.Fragment>
    //   {/*-----------------------Menus Category container---------------------- */}
    //   <CategoryContainer>
    //     <Title title="Mevcut Yemek Categorileri" />

    //     {/*-----------------------Menus Category content---------------------- */}

    //     <CategoryContent>
    //       {/*-----------------------Menus Category List---------------------- */}
    //       <CategoryList />
    //     </CategoryContent>
    //   </CategoryContainer>
    // </React.Fragment>

    <React.Fragment>
      {/*==============CATEGORYLİST BOOSTRAP CONTAİNER=============*/}

      <Box className="container-fluid" textAlign="center" w="100%">
        
        {/*===================CATEGORYLİST TİTLE================== */}

        <Title title="Mevcut Yemek Categorileri" />

        <Box className="container pt-5">

          {/*========================CATEGORY SLİDER================*/}

          <CategoryItem/>

        </Box>


      </Box>
    </React.Fragment>
  );
};

export default CategoryList;